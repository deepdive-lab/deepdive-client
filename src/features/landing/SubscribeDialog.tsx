import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface SubscribeDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const SubscribeDialog: React.FC<SubscribeDialogProps> = ({
  open,
  onOpenChange,
}) => {
  const [email, setEmail] = React.useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // handle subscription logic here
    console.log('Subscribing email:', email);
    onOpenChange(false);
    setEmail('');
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md bg-slate-900 border-slate-800 text-white">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold">Stay Updated</DialogTitle>
          <DialogDescription className="text-slate-400">
            Subscribe to our newsletter to get the latest technical deep-dives delivered straight to your inbox.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 py-4">
          <div className="space-y-2">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="bg-slate-950 border-slate-800 text-white placeholder:text-slate-500 focus-visible:ring-indigo-500"
            />
          </div>
          <DialogFooter className="sm:justify-start">
            <Button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-500 text-white border-0"
            >
              Subscribe Now
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};
