import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from "react";
import { Controller, } from "react-hook-form";
import { cn } from "../../utils/cn";
import { useFormUI } from "../../providers/form-config-provider";
import { ImagePlus, Trash2, UploadCloud, X } from "lucide-react";
const DEFAULT_ACCEPT = "image/*";
const K = { ENTER: "Enter", SPACE: " " };
function bytesFromMB(mb) {
    return mb * 1024 * 1024;
}
function isImage(file) {
    return file.type.startsWith("image/");
}
function uid() {
    return `${Date.now()}-${Math.random().toString(16).slice(2)}`;
}
const DropTile = ({ title, subtitle, disabledTile, limitReached, percent, onClick, onKeyDown, onFocus, onBlur, onPaste, onDragEnter, onDragOver, onDragLeave, onDrop, dragActive, dropzoneClassName, helperText, showCapacityBar, maxSizeMB, multiple, maxFiles, }) => {
    const { Card, CardContent, Progress } = useFormUI();
    return (_jsx(Card, { className: cn("relative overflow-hidden rounded-2xl h-48", "border", dragActive
            ? "border-foreground/35 ring-2 ring-foreground/10"
            : "border-border", disabledTile ? "opacity-60 pointer-events-none" : "cursor-pointer", dropzoneClassName, "shadow-none bg-background"), role: "button", tabIndex: 0, "aria-disabled": disabledTile, onClick: onClick, onFocus: onFocus, onBlur: onBlur, onKeyDown: onKeyDown, onPaste: onPaste, onDragEnter: onDragEnter, onDragOver: onDragOver, onDragLeave: onDragLeave, onDrop: onDrop, children: _jsxs(CardContent, { className: "p-0 h-40 flex items-center justify-center w-full", children: [_jsx("div", { className: "grid aspect-square px-5 text-center h-full", children: _jsxs("div", { className: "space-y-2", children: [_jsx("div", { className: "mx-auto inline-flex h-12 w-12 items-center justify-center rounded-2xl border bg-background", children: _jsx(UploadCloud, { className: "h-6 w-6 text-muted-foreground" }) }), _jsx("div", { className: "text-sm font-semibold", children: title }), _jsx("div", { className: "text-xs text-muted-foreground", children: subtitle }), helperText ? (_jsx("div", { className: "pt-1 text-xs text-muted-foreground", children: helperText })) : null, showCapacityBar ? (_jsxs("div", { className: "pt-3", children: [_jsx(Progress, { value: percent }), _jsx("div", { className: "mt-1 text-[11px] text-muted-foreground", children: limitReached ? "Limit reached" : `≤ ${maxSizeMB}MB each` })] })) : null] }) }), dragActive ? (_jsx("div", { className: "pointer-events-none absolute inset-0 grid place-items-center bg-background/60 backdrop-blur-sm", children: _jsxs("div", { className: "rounded-2xl border bg-card px-4 py-3 shadow-sm", children: [_jsxs("div", { className: "flex items-center justify-center gap-2 text-sm font-semibold", children: [_jsx(UploadCloud, { className: "h-4 w-4" }), "Drop to upload"] }), _jsxs("div", { className: "mt-1 text-center text-xs text-muted-foreground", children: [multiple ? `Up to ${maxFiles} images` : "Single image", " \u2022 \u2264", " ", maxSizeMB, "MB"] })] }) })) : null] }) }));
};
export function RHFImageUpload({ control, name, label, multiple = false, maxFiles = 5, maxSizeMB = 5, accept = DEFAULT_ACCEPT, disabled = false, className, dropzoneClassName, initialUrl, initialUrls, helperText, showCapacityBar = true, }) {
    const { Label, Badge, Button, ScrollArea, Card, CardContent, Tooltip, TooltipTrigger, TooltipContent, } = useFormUI();
    const inputRef = React.useRef(null);
    const [dragActive, setDragActive] = React.useState(false);
    const [localError, setLocalError] = React.useState(null);
    const [focused, setFocused] = React.useState(false);
    const [previews, setPreviews] = React.useState(() => {
        if (multiple) {
            const urls = initialUrls ?? [];
            return urls.map((u) => ({ id: uid(), url: u, isInitial: true }));
        }
        return initialUrl ? [{ id: uid(), url: initialUrl, isInitial: true }] : [];
    });
    React.useEffect(() => {
        return () => {
            for (const p of previews)
                if (p.file)
                    URL.revokeObjectURL(p.url);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    const openPicker = () => {
        if (disabled)
            return;
        inputRef.current?.click();
    };
    const validateFiles = (files) => {
        const maxBytes = bytesFromMB(maxSizeMB);
        for (const f of files) {
            if (!isImage(f))
                return "Only image files are allowed.";
            if (f.size > maxBytes)
                return `Each image must be ≤ ${maxSizeMB}MB.`;
        }
        return null;
    };
    const mergeFilesWithLimit = (existing, incoming) => {
        const room = Math.max(0, maxFiles - existing.length);
        if (room === 0)
            return existing;
        const existingKey = new Set(existing.map((f) => `${f.name}-${f.size}-${f.lastModified}`));
        const filtered = incoming.filter((f) => !existingKey.has(`${f.name}-${f.size}-${f.lastModified}`));
        return [...existing, ...filtered.slice(0, room)];
    };
    const setFromFiles = (onChange, currentValue, files) => {
        setLocalError(null);
        if (!files || files.length === 0)
            return;
        const picked = Array.from(files);
        if (!multiple) {
            const nextFiles = [picked[0]];
            const err = validateFiles(nextFiles);
            if (err)
                return setLocalError(err);
            setPreviews((prev) => {
                for (const p of prev)
                    if (p.file)
                        URL.revokeObjectURL(p.url);
                return [];
            });
            const nextPreview = {
                id: uid(),
                url: URL.createObjectURL(nextFiles[0]),
                file: nextFiles[0],
                isInitial: false,
            };
            setPreviews([nextPreview]);
            onChange(nextFiles[0]);
            return;
        }
        const existingFiles = Array.isArray(currentValue) ? currentValue : [];
        const merged = mergeFilesWithLimit(existingFiles, picked);
        const err = validateFiles(merged);
        if (err)
            return setLocalError(err);
        const incomingMerged = merged.slice(existingFiles.length);
        if (incomingMerged.length === 0)
            return;
        const incomingPreviews = incomingMerged.map((f) => ({
            id: uid(),
            url: URL.createObjectURL(f),
            file: f,
            isInitial: false,
        }));
        setPreviews((prev) => [...prev, ...incomingPreviews]);
        onChange(merged);
    };
    const removeAt = (index, value, onChange) => {
        setLocalError(null);
        const item = previews[index];
        setPreviews((prev) => {
            const copy = [...prev];
            const removed = copy.splice(index, 1)[0];
            if (removed?.file)
                URL.revokeObjectURL(removed.url);
            return copy;
        });
        if (!multiple) {
            onChange(null);
            return;
        }
        if (!item?.file)
            return;
        const current = Array.isArray(value) ? value : [];
        const next = current.filter((f) => `${f.name}-${f.size}-${f.lastModified}` !==
            `${item.file.name}-${item.file.size}-${item.file.lastModified}`);
        onChange(next.length ? next : null);
    };
    const clearAll = (onChange) => {
        setLocalError(null);
        setPreviews((prev) => {
            for (const p of prev)
                if (p.file)
                    URL.revokeObjectURL(p.url);
            return [];
        });
        onChange(null);
    };
    const onDrop = (e, onChange, currentValue) => {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(false);
        if (disabled)
            return;
        const dt = e.dataTransfer;
        if (!dt?.files?.length)
            return;
        setFromFiles(onChange, currentValue, dt.files);
    };
    const onPaste = (e, onChange, currentValue) => {
        if (disabled)
            return;
        const items = e.clipboardData?.items;
        if (!items?.length)
            return;
        const files = [];
        for (const it of items) {
            if (it.kind === "file") {
                const f = it.getAsFile();
                if (f)
                    files.push(f);
            }
        }
        if (files.length === 0)
            return;
        const dt = new DataTransfer();
        files.forEach((f) => dt.items.add(f));
        setFromFiles(onChange, currentValue, dt.files);
    };
    return (_jsx(Controller, { control: control, name: name, render: ({ field: { value, onChange }, fieldState: { error } }) => {
            const showError = error?.message || localError;
            const selectedCount = multiple
                ? Array.isArray(value)
                    ? value.length
                    : 0
                : value
                    ? 1
                    : 0;
            const capacity = multiple ? maxFiles : 1;
            const percent = Math.min(100, Math.round((selectedCount / capacity) * 100));
            const limitReached = multiple && selectedCount >= maxFiles;
            const hasPreview = previews.length > 0;
            const isSingleMode = !multiple;
            const singlePreview = isSingleMode && previews.length === 1;
            const uploadTitle = hasPreview
                ? isSingleMode
                    ? "Replace image"
                    : "Add images"
                : multiple
                    ? "Upload images"
                    : "Upload image";
            const uploadSubtitle = "Click or drag & drop";
            const commonTileHandlers = {
                onClick: openPicker,
                onFocus: () => setFocused(true),
                onBlur: () => setFocused(false),
                onKeyDown: (e) => {
                    if (e.key === K.ENTER || e.key === K.SPACE) {
                        e.preventDefault();
                        openPicker();
                    }
                },
                onPaste: (e) => onPaste(e, onChange, value),
                onDragEnter: (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    if (!disabled)
                        setDragActive(true);
                },
                onDragOver: (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    if (!disabled)
                        setDragActive(true);
                },
                onDragLeave: (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setDragActive(false);
                },
                onDrop: (e) => onDrop(e, onChange, value),
            };
            return (_jsxs("div", { className: cn("space-y-0", className), children: [label ? (_jsxs("div", { className: "flex items-center justify-between", children: [_jsx(Label, { children: label }), _jsxs("div", { className: "flex items-center gap-2", children: [_jsxs(Badge, { variant: "ghost", className: "gap-1", children: [_jsx(ImagePlus, { className: "h-3.5 w-3.5" }), multiple
                                                ? `${selectedCount}/${maxFiles}`
                                                : hasPreview
                                                    ? "1/1"
                                                    : "0/1"] }), hasPreview ? (_jsx(Button, { type: "button", variant: "ghost", size: "sm", disabled: disabled, onClick: () => clearAll(onChange), className: "h-8", children: _jsx(Trash2, { className: "h-4 w-4" }) })) : null] })] })) : null, _jsx("input", { ref: inputRef, type: "file", accept: accept, multiple: multiple, disabled: disabled, className: "hidden", onChange: (e) => setFromFiles(onChange, value, e.target.files) }), isSingleMode ? (singlePreview ? (_jsx(Card, { className: "group overflow-hidden rounded-2xl py-0 shadow-none", children: _jsxs(CardContent, { className: "relative p-0 h-48", children: [_jsx("div", { className: "relative w-full h-48 bg-background p-4 flex content-center", children: _jsx("img", { src: previews[0].url, alt: "preview", className: "object-contain mx-auto h-40 max-w-[160px]" }) }), previews[0].file ? (_jsxs("div", { className: "border-t px-4 py-3", children: [_jsx("div", { className: "truncate text-sm font-medium", children: previews[0].file.name }), _jsxs("div", { className: "mt-0.5 text-xs text-muted-foreground", children: [(previews[0].file.size / 1024 / 1024).toFixed(2), "MB"] })] })) : null] }) })) : (_jsx("div", { className: "h-48", children: _jsx(DropTile, { title: uploadTitle, subtitle: uploadSubtitle, disabledTile: disabled, limitReached: false, percent: percent, dragActive: dragActive, dropzoneClassName: dropzoneClassName, helperText: helperText, showCapacityBar: showCapacityBar, maxSizeMB: maxSizeMB, multiple: multiple, maxFiles: maxFiles, ...commonTileHandlers }) }))) : null, multiple ? (_jsx(ScrollArea, { className: cn("rounded-2xl border bg-card", previews.length > 6 ? "h-36" : "h-auto"), children: _jsx("div", { className: "p-3 h-36", children: _jsxs("div", { className: "grid grid-cols-3 gap-3 ", children: [_jsx(DropTile, { title: uploadTitle, subtitle: limitReached ? "Max files reached" : uploadSubtitle, disabledTile: disabled || limitReached, limitReached: limitReached, percent: percent, dragActive: dragActive, dropzoneClassName: dropzoneClassName, helperText: helperText, showCapacityBar: showCapacityBar, maxSizeMB: maxSizeMB, multiple: multiple, maxFiles: maxFiles, ...commonTileHandlers }), previews.map((p, idx) => (_jsx(Card, { className: "group relative overflow-hidden rounded-2xl shadow-none", children: _jsxs(CardContent, { className: "p-0 h-48", children: [_jsxs("div", { className: "relative aspect-square h-48 w-full bg-background flex flex-col items-center justify-center", children: [_jsx("img", { src: p.url, alt: `preview-${idx}`, className: "object-contain mx-auto h-40 max-w-[160px]" }), _jsxs(Tooltip, { children: [_jsx(TooltipTrigger, { asChild: true, children: _jsx("button", { type: "button", disabled: disabled, onClick: (e) => {
                                                                            e.stopPropagation();
                                                                            removeAt(idx, value, onChange);
                                                                        }, className: cn("absolute right-2 top-2 inline-flex h-9 w-9 items-center justify-center rounded-full", "bg-background/90 shadow-none backdrop-blur"), "aria-label": "Remove image", children: _jsx(X, { className: "h-4 w-4" }) }) }), _jsx(TooltipContent, { children: "Remove" })] })] }), p.file ? (_jsxs("div", { className: "border-t px-3 py-2", children: [_jsx("div", { className: "truncate text-xs font-medium", children: p.file.name }), _jsxs("div", { className: "text-[11px] text-muted-foreground", children: [(p.file.size / 1024 / 1024).toFixed(2), "MB"] })] })) : null] }) }, p.id)))] }) }) })) : null, showError ? (_jsx("p", { className: "text-sm text-destructive", children: showError })) : null] }));
        } }));
}
