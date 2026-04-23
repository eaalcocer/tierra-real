export default function TierraRealLanding() {
  return (
    <div className="min-h-screen bg-white text-neutral-900">

      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <p className="text-lg font-semibold">Tierra Real</p>
          <a href="#contacto" className="rounded-full bg-neutral-900 px-5 py-2.5 text-sm text-white">
            WhatsApp
          </a>
        </div>
      </header>

      {/* Hero (Proyecto específico) */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:py-28 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-sm uppercase tracking-widest text-neutral-500">Nuevo lanzamiento</p>
          <h1 className="mt-4 text-4xl md:text-5xl font-semibold leading-tight">
            Lotes de inversión en ubicación estratégica en Mérida, Yucatán
          </h1>
          <p className="mt-6 text-neutral-600 leading-8">
            Un proyecto pensado para generar plusvalía real, con acceso claro, documentación en regla y una ubicación con crecimiento sostenido.
          </p>

          <div className="mt-8 grid grid-cols-3 gap-4 text-center">
            <div>
              <p className="text-xl font-semibold">Desde</p>
              <p className="text-sm text-neutral-500">$95,000</p>
            </div>
            <div>
              <p className="text-xl font-semibold">Ubicación</p>
              <p className="text-sm text-neutral-500">Yaxnic, Mérida, Yucatán</p>
            </div>
            <div>
              <p className="text-xl font-semibold">Listo</p>
              <p className="text-sm text-neutral-500">Para escriturar</p>
            </div>
          </div>

          <div className="mt-8 flex gap-4">
            <a href="#contacto" className="bg-neutral-900 text-white px-6 py-3 rounded-full text-sm">
              Quiero información
            </a>
            <a href="#proyecto" className="border px-6 py-3 rounded-full text-sm">
              Ver detalles
            </a>
          </div>
        </div>

        <img
  src="/Camino.JPG"
  alt="Proyecto Tierra Real"
  className="h-80 w-full rounded-3xl object-cover"
/>
      </section>

      {/* Proyecto */}
      <section id="proyecto" className="bg-neutral-50 py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
<img
  src="/MP-Clean.png"
  alt="Masterplan del proyecto"
  className="w-full rounded-3xl object-cover"
/>

          <div>
            <h2 className="text-3xl font-semibold">Un proyecto con fundamentos, no promesas</h2>
            <p className="mt-4 text-neutral-600 leading-8">
              Este desarrollo está pensado para quienes buscan invertir con criterio. Ubicación con acceso real, crecimiento urbano cercano y condiciones claras desde el inicio.
            </p>

            <ul className="mt-6 space-y-3 text-sm text-neutral-700">
              <li>• Escritura individual</li>
              <li>• Libre de gravamen</li>
              <li>• Acceso definido</li>
              <li>• Uso de suelo rústico</li>
              <li>• Potencial de liquidez a mediano plazo</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Diferenciador */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold">Aquí no vienes a apostar, vienes a decidir bien</h2>
          <p className="mt-4 text-neutral-600 leading-8">
            La mayoría de los proyectos inmobiliarios venden expectativas. Aquí el enfoque es distinto: claridad, información directa y acompañamiento para que tomes decisiones con lógica.
          </p>
        </div>
      </section>

      {/* CTA fuerte */}
      <section id="contacto" className="bg-neutral-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-semibold">Recibe ubicación, precios y disponibilidad por WhatsApp</h2>
            <p className="mt-4 text-neutral-300">
              Sin formularios largos. Escríbenos directo y te compartimos la información completa.
            </p>
          </div>

          <div className="bg-white text-neutral-900 p-6 rounded-3xl">
            <p className="text-sm font-medium">Acceso inmediato</p>
            <a
              href="https://wa.me/5219901014381"
              className="mt-4 block text-center bg-neutral-900 text-white px-6 py-3 rounded-full text-sm"
            >
              Enviar WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center text-sm text-neutral-500">
        tierrareal.com.mx
      </footer>
    </div>
  );
}