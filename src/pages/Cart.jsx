import LayoutUser from "../components/user/LayoutUser";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Minus, Plus, Trash2, MessageCircle } from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function Cart() {
  const { cart, removeFromCart } = useCart();
  const subtotal = cart.reduce(
    (total, item) => total + item.harga * item.qty,
    0
  );

  const ongkir = cart.length > 0 ? 20000 : 0;
  const total = subtotal + ongkir;

  const handleCheckoutWhatsApp = () => {
    const nomorWA = "6281256671502";
    let pesan = `Halo, saya ingin checkout pesanan berikut:%0A%0A`;

    cart.forEach((item, index) => {
      pesan += `${index + 1}. ${item.nama}%0A`;
      pesan += `   Jml: ${item.qty}%0A`;
      pesan += `   Harga: Rp ${item.harga.toLocaleString("id-ID")}%0A%0A`;
    });

    pesan += `Subtotal: Rp ${subtotal.toLocaleString("id-ID")}%0A`;
    pesan += `Ongkir: Rp ${ongkir.toLocaleString("id-ID")}%0A`;
    pesan += `Total: Rp ${total.toLocaleString("id-ID")}%0A%0A`;
    pesan += `Terima kasih.`;

    window.open(`https://wa.me/${nomorWA}?text=${pesan}`, "_blank");
  };

  return (
    <LayoutUser>
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h1 className="text-3xl font-bold text-pink-600 mb-10">
          Keranjang Belanja
        </h1>

        {cart.length === 0 && (
          <p className="text-center text-gray-500">
            Keranjang masih kosong
          </p>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* CART ITEMS */}
          <div className="lg:col-span-2 space-y-4">
            {cart.map((item) => (
              <Card key={item.id}>
                <CardContent className="flex gap-4 p-4 items-center">
                  <img
                    src={item.image}
                    alt={item.nama}
                    className="w-24 h-24 object-contain bg-gray-50 rounded"
                  />

                  <div className="flex-1">
                    <h2 className="font-semibold">{item.nama}</h2>
                    <p className="text-pink-600 font-bold">
                      Rp {item.harga.toLocaleString("id-ID")}
                    </p>
                    <span>Jumlah: {item.qty}</span>
                  </div>

                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => removeFromCart(item.id)}
                  >
                    <Trash2 className="text-red-500" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* SUMMARY */}
          <Card className="h-fit">
            <CardContent className="p-6 space-y-4">
              <h2 className="text-lg font-semibold">Ringkasan</h2>

              <div className="flex justify-between text-sm">
                <span>Subtotal</span>
                <span>Rp {subtotal.toLocaleString("id-ID")}</span>
              </div>

              <div className="flex justify-between text-sm">
                <span>Ongkir</span>
                <span>Rp {ongkir.toLocaleString("id-ID")}</span>
              </div>

              <hr />

              <div className="flex justify-between font-bold text-lg">
                <span>Total</span>
                <span>Rp {total.toLocaleString("id-ID")}</span>
              </div>

              <Button
                className="w-full mt-4 flex items-center gap-2 bg-green-600 hover:bg-green-700"
                onClick={handleCheckoutWhatsApp}
                disabled={cart.length === 0}
              >
                <MessageCircle size={18} />
                Checkout via WhatsApp
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </LayoutUser>
  );
}
