import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "../ui/dialog";

import { Button } from "../ui/button";

export default function ConfirmDeleteDialog({ open, onClose, onConfirm }) {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Hapus Produk</DialogTitle>
          <DialogDescription>
            Apakah Anda yakin ingin menghapus produk ini?
            Tindakan ini tidak dapat dibatalkan.
          </DialogDescription>
        </DialogHeader>

        <DialogFooter className="flex justify-end gap-2 mt-5">
          <Button variant="outline" onClick={onClose}>
            Batal
          </Button>
          <Button variant="destructive" onClick={onConfirm}>
            Ya, Hapus
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
