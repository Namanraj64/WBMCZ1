'use client';

import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import ContactForm from '@/components/forms/ContactForm';

interface ContactPopupContextType {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const ContactPopupContext = createContext<ContactPopupContextType | undefined>(undefined);

export function useContactPopup() {
  const context = useContext(ContactPopupContext);
  if (!context) {
    throw new Error('useContactPopup must be used within a ContactPopupProvider');
  }
  return context;
}

const POPUP_STORAGE_KEY = 'wbmcz-contact-popup-seen';

export function ContactPopupProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // This effect runs only once on the client after hydration
    const hasSeenPopup = localStorage.getItem(POPUP_STORAGE_KEY);
    if (!hasSeenPopup) {
      const timer = setTimeout(() => {
        setIsOpen(true);
        localStorage.setItem(POPUP_STORAGE_KEY, 'true');
      }, 2000); // Delay popup by 2 seconds

      return () => clearTimeout(timer);
    }
  }, []);

  const handleSuccess = () => {
    setIsOpen(false);
  };

  return (
    <ContactPopupContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Request a Quote</DialogTitle>
            <DialogDescription>
              Fill out the form below and we'll get back to you as soon as possible.
            </DialogDescription>
          </DialogHeader>
          <div className="py-4">
            <ContactForm onSuccess={handleSuccess} />
          </div>
        </DialogContent>
      </Dialog>
    </ContactPopupContext.Provider>
  );
}
