import LayoutUser from "../components/user/LayoutUser";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Trash2, MessageCircle } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const { cart, removeFromCart, clearCart, increaseQty, decreaseQty } = useCart();
  const navigate = useNavigate();

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
      pesan += `   Jumlah: ${item.qty}%0A`;
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
      <div className="max-w-7xl mx-auto px-6 py-16 space-y-8">
        {/* HEADER */}
        <div className="flex items-start justify-between flex-wrap gap-4">
        {/* tombol kembali */}
        <button
          type="button"
          onClick={() => navigate("/products")}
          className="bg-pink-200 hover:bg-pink-300 text-pink-800 font-bold px-4 py-2 rounded">
          ← Kembali
        </button>

          <div>
            <h1 className="text-3xl text-center font-bold text-pink-600">
              Keranjang Belanja
            </h1>
            <p className="text-pink-800 text-center font-semibold mt-1">
              {cart.length} produk di keranjang Anda
            </p>
          </div>

          {cart.length > 0 && (
            <Button
              variant="outline"
              className="text-red-500 border-red-300 flex gap-2"
              onClick={clearCart}>
              <Trash2 size={16} />
              Kosongkan
            </Button>
          )}
        </div>

        {/* cart kosong */}
        {cart.length === 0 && (
          <p className="text-center text-gray-500 py-20">
            Keranjang masih kosong
          </p>
        )}

        {cart.length > 0 && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

            {/* daftar produk di cart */}
            <div className="lg:col-span-2 space-y-4">
              {cart.map((item) => (
                <Card key={item.id}>
                  <CardContent className="flex items-center justify-between p-4 gap-4">

                    {/* sisi kiri penempatan produk cart  */}
                    <div className="flex items-center gap-4 flex-1">
                      <img
                        src={item.image}
                        alt={item.nama}
                        className="w-24 h-24 rounded object-cover bg-gray-50"/>

                      <div>
                        <h2 className="font-semibold">{item.nama}</h2>
                        <p className="text-pink-600 font-bold">
                          Rp {item.harga.toLocaleString("id-ID")}
                        </p>

                        {/* buat ngontrol qty */}
                        <div className="flex items-center gap-2 mt-2">
                          <Button
                            variant="outline"
                            size="icon"
                            onClick={() => decreaseQty(item.id)}>
                            −
                          </Button>

                          <span className="w-6 text-center">{item.qty}</span>

                          <Button
                            variant="outline"
                            size="icon"
                            onClick={() => increaseQty(item.id)}>
                            +
                          </Button>
                        </div>
                      </div>
                    </div>

                    {/* sisi kanan penempatan produk cart */}
                    <div className="flex items-center gap-4">
                      <p className="font-semibold">
                        Rp {(item.harga * item.qty).toLocaleString("id-ID")}
                      </p>

                      <Button variant="ghost" size="icon"
                        onClick={() => removeFromCart(item.id)}>
                        <Trash2 className="text-red-500" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* ringkasan pesanan */}
            <Card className="h-fit">
              <CardContent className="p-6 space-y-4">
                <h2 className="text-lg font-semibold">Ringkasan Pesanan</h2>

                <div className="space-y-2 text-sm"></div>
                {cart.map(item => (
                    <div key={item.id} className="flex justify-between">
                        <span>{item.nama} x {item.qty}</span>
                        <span>Rp {(item.harga * item.qty).toLocaleString("id-ID")}</span>
                    </div>))}

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
                  className="w-full mt-4 flex items-center gap-2 bg-pink-600 hover:bg-pink-700"
                  onClick={handleCheckoutWhatsApp}
                >
                  <MessageCircle size={18} />
                  Pesan via WhatsApp
                </Button>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </LayoutUser>
  );
}