import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Loader2, CheckCircle2, XCircle } from "lucide-react";
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';

// Schema de validación
const contactFormSchema = z.object({
  name: z.string().min(2, "El nombre debe tener al menos 2 caracteres"),
  phone: z.string().min(9, "Ingresa un teléfono válido"),
  email: z.string().email("Ingresa un email válido"),
  service: z.string().min(3, "Especifica el servicio que necesitas"),
  message: z.string().min(10, "Describe el problema con más detalle"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

interface ContactFormProps {
  className?: string;
}

const ContactForm = ({ className = "" }: ContactFormProps) => {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const { executeRecaptcha } = useGoogleReCaptcha();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setStatus("loading");
    setErrorMessage("");

    try {
      // Ejecutar reCAPTCHA v3
      if (!executeRecaptcha) {
        throw new Error("reCAPTCHA no está disponible");
      }

      const recaptchaToken = await executeRecaptcha('contact_form');

      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...data,
          recaptchaToken, // Enviar el token al backend
        }),
      });

      if (!response.ok) {
        throw new Error("Error al enviar el mensaje");
      }

      setStatus("success");
      reset();
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setStatus("idle");
      }, 5000);
    } catch (error) {
      setStatus("error");
      setErrorMessage("Hubo un error al enviar el mensaje. Por favor, intenta nuevamente.");
      
      // Reset error message after 5 seconds
      setTimeout(() => {
        setStatus("idle");
        setErrorMessage("");
      }, 5000);
    }
  };

  return (
    <div className={className}>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <Input
              {...register("name")}
              placeholder="Tu nombre"
              className="bg-white/10 border-white/30 text-white placeholder:text-white/60 rounded-xl py-6"
              disabled={status === "loading"}
            />
            {errors.name && (
              <p className="text-red-300 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>
          <div>
            <Input
              {...register("phone")}
              type="tel"
              placeholder="Tu teléfono"
              className="bg-white/10 border-white/30 text-white placeholder:text-white/60 rounded-xl py-6"
              disabled={status === "loading"}
            />
            {errors.phone && (
              <p className="text-red-300 text-sm mt-1">{errors.phone.message}</p>
            )}
          </div>
        </div>

        <div>
          <Input
            {...register("email")}
            type="email"
            placeholder="Tu email"
            className="bg-white/10 border-white/30 text-white placeholder:text-white/60 rounded-xl py-6"
            disabled={status === "loading"}
          />
          {errors.email && (
            <p className="text-red-300 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        <div>
          <Input
            {...register("service")}
            placeholder="Servicio que necesitas"
            className="bg-white/10 border-white/30 text-white placeholder:text-white/60 rounded-xl py-6"
            disabled={status === "loading"}
          />
          {errors.service && (
            <p className="text-red-300 text-sm mt-1">{errors.service.message}</p>
          )}
        </div>

        <div>
          <Textarea
            {...register("message")}
            placeholder="Describa el problema"
            rows={5}
            className="bg-white/10 border-white/30 text-white placeholder:text-white/60 rounded-xl"
            disabled={status === "loading"}
          />
          {errors.message && (
            <p className="text-red-300 text-sm mt-1">{errors.message.message}</p>
          )}
        </div>

        <Button
          type="submit"
          variant="ghost"
          disabled={status === "loading"}
          className="w-full bg-landing3-orange hover:bg-landing3-orange/90 text-white hover:text-white rounded-full py-6 text-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {status === "loading" ? (
            <>
              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
              Enviando...
            </>
          ) : (
            "Enviar Solicitud"
          )}
        </Button>

        {/* Success Message */}
        {status === "success" && (
          <div className="flex items-center justify-center gap-2 text-green-300 bg-green-500/20 p-4 rounded-xl">
            <CheckCircle2 className="h-5 w-5" />
            <p>¡Mensaje enviado con éxito! Te contactaremos pronto.</p>
          </div>
        )}

        {/* Error Message */}
        {status === "error" && (
          <div className="flex items-center justify-center gap-2 text-red-300 bg-red-500/20 p-4 rounded-xl">
            <XCircle className="h-5 w-5" />
            <p>{errorMessage}</p>
          </div>
        )}
      </form>
    </div>
  );
};

export default ContactForm;
