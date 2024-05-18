"use client";

import GiftCard from "@/components/gift-card";
import { Button } from "@/components/ui/button";
import './styles.css';
import { Dialog, DialogClose, DialogContent, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import Image from "next/image";
import { useToast } from "@/components/ui/use-toast";

export type GiftInfoType = {
  title: string;
  photo: string;
  qrCode: string;
  qrCodeImage: string;
  price: number;
}

type PixDataType = {
  qrCode: string;
  qrCodeImage: string;
}

const gifts: GiftInfoType[] = [
  {
    title: "Air Fryer",
    photo: '/products/air-fryer.png',
    price: 375.00,
    qrCodeImage: '/products/air-fryer-qrcode.png',
    qrCode: "00020126360014BR.GOV.BCB.PIX0114+55129964063725204000053039865406375.005802BR5923Antonio Dias Maia Costa6009SAO PAULO62140510AtL46A9ZV26304D707"
  },
  {
    title: "Air Fryer",
    photo: '/products/air-fryer.png',
    price: 375.00,
    qrCodeImage: '/products/air-fryer-qrcode.png',
    qrCode: "00020126360014BR.GOV.BCB.PIX0114+55129964063725204000053039865406375.005802BR5923Antonio Dias Maia Costa6009SAO PAULO62140510AtL46A9ZV26304D707"
  },
  {
    title: "Air Fryer",
    photo: '/products/air-fryer.png',
    price: 375.00,
    qrCodeImage: '/products/air-fryer-qrcode.png',
    qrCode: "00020126360014BR.GOV.BCB.PIX0114+55129964063725204000053039865406375.005802BR5923Antonio Dias Maia Costa6009SAO PAULO62140510AtL46A9ZV26304D707"
  },
  {
    title: "Air Fryer",
    photo: '/products/air-fryer.png',
    price: 375.00,
    qrCodeImage: '/products/air-fryer-qrcode.png',
    qrCode: "00020126360014BR.GOV.BCB.PIX0114+55129964063725204000053039865406375.005802BR5923Antonio Dias Maia Costa6009SAO PAULO62140510AtL46A9ZV26304D707"
  },
  {
    title: "Air Fryer",
    photo: '/products/air-fryer.png',
    price: 375.00,
    qrCodeImage: '/products/air-fryer-qrcode.png',
    qrCode: "00020126360014BR.GOV.BCB.PIX0114+55129964063725204000053039865406375.005802BR5923Antonio Dias Maia Costa6009SAO PAULO62140510AtL46A9ZV26304D707"
  },
  {
    title: "Air Fryer",
    photo: '/products/air-fryer.png',
    price: 375.00,
    qrCodeImage: '/products/air-fryer-qrcode.png',
    qrCode: "00020126360014BR.GOV.BCB.PIX0114+55129964063725204000053039865406375.005802BR5923Antonio Dias Maia Costa6009SAO PAULO62140510AtL46A9ZV26304D707"
  }
];

const pixData: PixDataType = {
  qrCode: "00020126360014BR.GOV.BCB.PIX0114+55129964063725204000053039865802BR5923Antonio Dias Maia Costa6009SAO PAULO62140510Mkyme3OGbO630425B0",
  qrCodeImage: "/pix-qr-code.png"
}

export default function Gifts() {
  const { toast } = useToast();

  return (
    <main className="gifts-wrapper">
      <section className="gifts-area">
        <h1>Aqui você confere a lista de presentes</h1>
        <div className="gifts-list">
          {gifts.map((gift) => {
            return <GiftCard gift={gift} key={gift.title} />
          })}
        </div>
      </section>
      <section className="pix-area">
        <h2>Quer enviar um valor específico?</h2>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="button">
              Ver QR Code
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogTitle>QR Code:</DialogTitle>
            <div className="dialog-image-wrapper">
              <Image src={pixData.qrCodeImage} alt="QR Code para nos presentear" width={400} height={200} />
            </div>
            <DialogClose asChild>
              <Button
                className="button"
                onClick={() => {
                  navigator.clipboard.writeText(pixData.qrCode);
                  toast({
                    variant: "success",
                    title: "QR Code copiado com sucesso!"
                  });
                }}>
                Copiar QR Code
              </Button>
            </DialogClose>
          </DialogContent>
        </Dialog>
      </section>
    </main>
  );
}