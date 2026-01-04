import { Badge } from "@/components/ui/badge";
import { useCart } from "@/context/CartContext";

export default function CartBadge() {
  const { cart } = useCart();
  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);

  if (totalItems === 0) return null;

  return (
    <Badge
      variant="secondary"
      className="absolute -top-2 -right-3 bg-pink-300 text-pink-900 text-[10px] font-bold rounded-full
        px-1.5 py-0.5 min-w-[18px] h-[18px] flex items-center justify-center">
      {totalItems}
    </Badge>
  );
}