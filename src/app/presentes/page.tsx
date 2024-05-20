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
    title: "Jogo de Copos",
    photo: '/products/jogo-de-copos.jpg',
    price: 40.00,
    qrCodeImage: '/pix-qr-code.png',
    qrCode: "00020126360014BR.GOV.BCB.PIX0114+55129964063725204000053039865802BR5923Antonio Dias Maia Costa6009SAO PAULO62140510Mkyme3OGbO630425B0"
  },
  {
    title: "Jogo de Xícaras",
    photo: '/products/jogo-de-xicaras.jpg',
    price: 80.00,
    qrCodeImage: '/pix-qr-code.png',
    qrCode: "00020126360014BR.GOV.BCB.PIX0114+55129964063725204000053039865802BR5923Antonio Dias Maia Costa6009SAO PAULO62140510Mkyme3OGbO630425B0"
  },
  {
    title: "Jogo de Pratos",
    photo: '/products/jogo-pratos.png',
    price: 70.00,
    qrCodeImage: '/pix-qr-code.png',
    qrCode: "00020126360014BR.GOV.BCB.PIX0114+55129964063725204000053039865802BR5923Antonio Dias Maia Costa6009SAO PAULO62140510Mkyme3OGbO630425B0"
  },
  {
    title: "Cafeteira",
    photo: '/products/cafeteira.png',
    price: 150.00,
    qrCodeImage: '/pix-qr-code.png',
    qrCode: "00020126360014BR.GOV.BCB.PIX0114+55129964063725204000053039865802BR5923Antonio Dias Maia Costa6009SAO PAULO62140510Mkyme3OGbO630425B0"
  },
  {
    title: "Máquina de Lavar Roupas",
    photo: '/products/maquina-roupas.png',
    price: 1400.00,
    qrCodeImage: '/pix-qr-code.png',
    qrCode: "00020126360014BR.GOV.BCB.PIX0114+55129964063725204000053039865802BR5923Antonio Dias Maia Costa6009SAO PAULO62140510Mkyme3OGbO630425B0"
  },
  {
    title: "Jogo de Talheres",
    photo: '/products/jogo-talheres.png',
    price: 45.00,
    qrCodeImage: '/pix-qr-code.png',
    qrCode: "00020126360014BR.GOV.BCB.PIX0114+55129964063725204000053039865802BR5923Antonio Dias Maia Costa6009SAO PAULO62140510Mkyme3OGbO630425B0"
  },
  {
    title: "Jogo Americano",
    photo: '/products/jogo-americano.jpg',
    price: 50.00,
    qrCodeImage: '/pix-qr-code.png',
    qrCode: "00020126360014BR.GOV.BCB.PIX0114+55129964063725204000053039865802BR5923Antonio Dias Maia Costa6009SAO PAULO62140510Mkyme3OGbO630425B0"
  },
  {
    title: "Jogo de Sobremesa",
    photo: '/products/jogo-sobremesa.jpg',
    price: 45.00,
    qrCodeImage: '/pix-qr-code.png',
    qrCode: "00020126360014BR.GOV.BCB.PIX0114+55129964063725204000053039865802BR5923Antonio Dias Maia Costa6009SAO PAULO62140510Mkyme3OGbO630425B0"
  },
  {
    title: "Utensílios de Cozinha",
    photo: '/products/utensilios-cozinha.jpg',
    price: 50.00,
    qrCodeImage: '/pix-qr-code.png',
    qrCode: "00020126360014BR.GOV.BCB.PIX0114+55129964063725204000053039865802BR5923Antonio Dias Maia Costa6009SAO PAULO62140510Mkyme3OGbO630425B0"
  },
  {
    title: "Aspirador de Pó",
    photo: '/products/aspirador.png',
    price: 180.00,
    qrCodeImage: '/pix-qr-code.png',
    qrCode: "00020126360014BR.GOV.BCB.PIX0114+55129964063725204000053039865802BR5923Antonio Dias Maia Costa6009SAO PAULO62140510Mkyme3OGbO630425B0"
  },
  {
    title: "Jogo de Cama",
    photo: '/products/jogo-de-cama.png',
    price: 175.00,
    qrCodeImage: '/pix-qr-code.png',
    qrCode: "00020126360014BR.GOV.BCB.PIX0114+55129964063725204000053039865802BR5923Antonio Dias Maia Costa6009SAO PAULO62140510Mkyme3OGbO630425B0"
  },
  {
    title: "Jogo de Panelas",
    photo: '/products/jogo-de-panelas.jpg',
    price: 275.00,
    qrCodeImage: '/pix-qr-code.png',
    qrCode: "00020126360014BR.GOV.BCB.PIX0114+55129964063725204000053039865802BR5923Antonio Dias Maia Costa6009SAO PAULO62140510Mkyme3OGbO630425B0"
  },
  {
    title: "Microondas",
    photo: '/products/microondas.png',
    price: 550.00,
    qrCodeImage: '/pix-qr-code.png',
    qrCode: "00020126360014BR.GOV.BCB.PIX0114+55129964063725204000053039865802BR5923Antonio Dias Maia Costa6009SAO PAULO62140510Mkyme3OGbO630425B0"
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
        <h2 className="italic opacity-50">*Para outras formas de presentear, entre em contato com os noivos</h2>
      </section>
    </main>
  );
}