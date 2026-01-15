'use client';

import { X } from 'lucide-react';
import { useState } from 'react';
import styles from './LogModal.module.css';

interface LogModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    fields: { label: string; type: string; placeholder?: string; key: string }[];
    onSubmit: (data: Record<string, string>) => void;
}

export default function LogModal({ isOpen, onClose, title, fields, onSubmit }: LogModalProps) {
    const [formData, setFormData] = useState<Record<string, string>>({});

    if (!isOpen) return null;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(formData);
        onClose();
        setFormData({});
    };

    const handleChange = (key: string, value: string) => {
        setFormData(prev => ({ ...prev, [key]: value }));
    };

    return (
        <div className={styles.overlay}>
            <div className={styles.modal}>
                <div className={styles.header}>
                    <h2 className={styles.title}>{title}</h2>
                    <button onClick={onClose} className={styles.closeButton}>
                        <X size={20} />
                    </button>
                </div>

                <form onSubmit={handleSubmit} className={styles.form}>
                    {fields.map((field) => (
                        <label key={field.key} className={styles.label}>
                            {field.label}
                            <input
                                type={field.type}
                                placeholder={field.placeholder}
                                className={styles.input}
                                value={formData[field.key] || ''}
                                onChange={(e) => handleChange(field.key, e.target.value)}
                                required
                            />
                        </label>
                    ))}

                    <div className={styles.actions}>
                        <button type="button" onClick={onClose} className={styles.cancelButton}>
                            Cancel
                        </button>
                        <button type="submit" className={styles.submitButton}>
                            Save
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
