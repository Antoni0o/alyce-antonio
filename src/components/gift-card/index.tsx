"use client";

import { GiftInfoType } from '@/app/presentes/page';
import './styles.css';
import Image from 'next/image';
import { Dialog, DialogClose, DialogContent, DialogTitle, DialogTrigger } from '../ui/dialog';
import { Button } from '../ui/button';
import { useToast } from "@/components/ui/use-toast"

type GiftCardPropsType = {
  gift: GiftInfoType;
}

export default function GiftCard({ gift }: GiftCardPropsType) {
  const { toast } = useToast();

  return (
    <section className="gift-card-wrapper">
      <div className="image">
        <Image src={gift.photo} alt={gift.title} width={300} height={200} />
      </div>
      <div className="content">
        <div className="info">
          <h2>{gift.title}</h2>
          <h3>R$ {gift.price.toFixed(2).replace(".", ",")}</h3>
        </div>
        <div className="action">
          <Dialog>
            <DialogTrigger>
              <Button className='button'>
                Comprar
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogTitle>QR Code:</DialogTitle>
              <div className="dialog-image-wrapper">
                <Image src={gift.qrCodeImage} alt={gift.title} width={400} height={300} />
              </div>
              <DialogClose asChild>
                <Button
                  className='button'
                  onClick={() => {
                    navigator.clipboard.writeText(gift.qrCode);
                    toast({
                      variant: "success",
                      title: "QR Code copiado com sucesso!"
                    })
                  }}>
                  Copiar QR Code
                </Button>
              </DialogClose>
            </DialogContent>
          </Dialog>
        </div>
      </div>
      <div className="footer">

      </div>
    </section>
  );
}