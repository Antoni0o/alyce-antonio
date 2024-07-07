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
    qrCodeImage: '/products/a40-qrcode.png',
    qrCode: "00020126360014BR.GOV.BCB.PIX0114+5512996406372520400005303986540540.005802BR5923Antonio Dias Maia Costa6009SAO PAULO62140510Nus72SDo1X6304839E"
  },
  {
    title: "Jogo de Xícaras",
    photo: '/products/jogo-de-xicaras.jpg',
    price: 80.00,
    qrCodeImage: '/products/a80-qrcode.png',
    qrCode: "00020126360014BR.GOV.BCB.PIX0114+5512996406372520400005303986540580.005802BR5923Antonio Dias Maia Costa6009SAO PAULO62140510iI2FjeKNIg63049B05"
  },
  {
    title: "Jogo de Pratos",
    photo: '/products/jogo-pratos.png',
    price: 70.00,
    qrCodeImage: '/products/a70-qrcode.png',
    qrCode: "00020126360014BR.GOV.BCB.PIX0114+5512996406372520400005303986540570.005802BR5923Antonio Dias Maia Costa6009SAO PAULO62140510KQFwbfFsdC6304F69E"
  },
  {
    title: "Cafeteira",
    photo: '/products/cafeteira.png',
    price: 150.00,
    qrCodeImage: '/products/a150-qrcode.png',
    qrCode: "00020126360014BR.GOV.BCB.PIX0114+55129964063725204000053039865406150.005802BR5923Antonio Dias Maia Costa6009SAO PAULO62140510gO3buf3QfN63043DEB"
  },
  {
    title: "Máquina de Lavar Roupas",
    photo: '/products/maquina-roupas.png',
    price: 1400.00,
    qrCodeImage: '/products/a1400-qrcode.png',
    qrCode: "00020126360014BR.GOV.BCB.PIX0114+551299640637252040000530398654071400.005802BR5923Antonio Dias Maia Costa6009SAO PAULO62140510w2CcH03pHG6304EA5C"
  },
  {
    title: "Jogo de Talheres",
    photo: '/products/jogo-talheres.png',
    price: 45.00,
    qrCodeImage: '/products/a45-qrcode.png',
    qrCode: "00020126360014BR.GOV.BCB.PIX0114+5512996406372520400005303986540545.005802BR5923Antonio Dias Maia Costa6009SAO PAULO62140510hknxK7Yigr63042553"
  },
  {
    title: "Jogo Americano",
    photo: '/products/jogo-americano.jpg',
    price: 50.00,
    qrCodeImage: '/products/a50-qrcode.png',
    qrCode: "00020126360014BR.GOV.BCB.PIX0114+5512996406372520400005303986540550.005802BR5923Antonio Dias Maia Costa6009SAO PAULO62140510u31vAP98gr63044D1D"
  },
  {
    title: "Jogo de Sobremesa",
    photo: '/products/jogo-sobremesa.jpeg',
    price: 45.00,
    qrCodeImage: '/products/a45-qrcode.png',
    qrCode: "00020126360014BR.GOV.BCB.PIX0114+5512996406372520400005303986540545.005802BR5923Antonio Dias Maia Costa6009SAO PAULO62140510hknxK7Yigr63042553"
  },
  {
    title: "Utensílios de Cozinha",
    photo: '/products/utensilios-cozinha.jpg',
    price: 50.00,
    qrCodeImage: '/products/a50-qrcode.png',
    qrCode: "00020126360014BR.GOV.BCB.PIX0114+5512996406372520400005303986540550.005802BR5923Antonio Dias Maia Costa6009SAO PAULO62140510u31vAP98gr63044D1D"
  },
  {
    title: "Aspirador de Pó",
    photo: '/products/aspirador.png',
    price: 180.00,
    qrCodeImage: '/products/a180-qrcode.png',
    qrCode: "00020126360014BR.GOV.BCB.PIX0114+55129964063725204000053039865406180.005802BR5923Antonio Dias Maia Costa6009SAO PAULO62140510QDCBM2rgkw63048685"
  },
  {
    title: "Jogo de Cama",
    photo: '/products/jogo-de-cama.png',
    price: 175.00,
    qrCodeImage: '/products/a175-qrcode.png',
    qrCode: "00020126360014BR.GOV.BCB.PIX0114+55129964063725204000053039865406175.005802BR5923Antonio Dias Maia Costa6009SAO PAULO62140510KprloRjXn66304B238"
  },
  {
    title: "Jogo de Panelas",
    photo: '/products/jogo-de-panelas.jpg',
    price: 275.00,
    qrCodeImage: '/products/a275-qrcode.png',
    qrCode: "00020126360014BR.GOV.BCB.PIX0114+55129964063725204000053039865406275.005802BR5923Antonio Dias Maia Costa6009SAO PAULO62140510wyPX7vbtkE6304714E"
  },
  {
    title: "Porta Sapatos",
    photo: '/products/porta-sapatos.jpg',
    price: 70.00,
    qrCodeImage: '/products/a70-qrcode.png',
    qrCode: "00020126360014BR.GOV.BCB.PIX0114+5512996406372520400005303986540570.005802BR5923Antonio Dias Maia Costa6009SAO PAULO62140510KQFwbfFsdC6304F69E"
  },
  {
    title: "Potes",
    photo: '/products/potes.jpeg',
    price: 50.00,
    qrCodeImage: '/products/a50-qrcode.png',
    qrCode: "00020126360014BR.GOV.BCB.PIX0114+5512996406372520400005303986540550.005802BR5923Antonio Dias Maia Costa6009SAO PAULO62140510u31vAP98gr63044D1D"
  },
  {
    title: "Jogo de Toalhas",
    photo: '/products/jogo-toalhas.jpeg',
    price: 150.00,
    qrCodeImage: '/products/a150-qrcode.png',
    qrCode: "00020126360014BR.GOV.BCB.PIX0114+55129964063725204000053039865406150.005802BR5923Antonio Dias Maia Costa6009SAO PAULO62140510gO3buf3QfN63043DEB"
  },
  {
    title: "Estante",
    photo: '/products/estante-livros.jpeg',
    price: 260.00,
    qrCodeImage: '/products/a260-qrcode.png',
    qrCode: "00020126360014BR.GOV.BCB.PIX0114+55129964063725204000053039865406260.005802BR5923Antonio Dias Maia Costa6009SAO PAULO62140510v9rS41WaDV6304CBE1"
  },
  {
    title: "Processador de Alimentos",
    photo: '/products/processador-alimentos.jpeg',
    price: 150.00,
    qrCodeImage: '/products/a150-qrcode.png',
    qrCode: "00020126360014BR.GOV.BCB.PIX0114+55129964063725204000053039865406150.005802BR5923Antonio Dias Maia Costa6009SAO PAULO62140510gO3buf3QfN63043DEB"
  },
  {
    title: "Grill",
    photo: '/products/grill.jpeg',
    price: 150.00,
    qrCodeImage: '/products/a150-qrcode.png',
    qrCode: "00020126360014BR.GOV.BCB.PIX0114+55129964063725204000053039865406150.005802BR5923Antonio Dias Maia Costa6009SAO PAULO62140510gO3buf3QfN63043DEB"
  },
  {
    title: "Aromatizador",
    photo: '/products/aromatizador.jpeg',
    price: 80.00,
    qrCodeImage: '/products/a80-qrcode.png',
    qrCode: "00020126360014BR.GOV.BCB.PIX0114+5512996406372520400005303986540580.005802BR5923Antonio Dias Maia Costa6009SAO PAULO62140510iI2FjeKNIg63049B05"
  },
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