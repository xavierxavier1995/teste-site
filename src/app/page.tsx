import { Heart, Clock, Shield, Users } from 'lucide-react'

const clinic = {
  name: 'Clínica Saúde Plus',
  specialty: 'Cardiologia, Clínica Geral',
}

export default function Home() {
  return (
    <div className="bg-white">
      {/* Header */}
      <header className="bg-blue-600 text-white py-4">
        <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">{clinic.name}</h1>
          <p className="text-blue-100">{clinic.specialty}</p>
        </div>
      </header>

      {/* Seção 1: Hero */}
      <section className="bg-gradient-to-r from-blue-50 to-blue-100 py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Seu bem-estar é nossa prioridade
          </h1>
          <p className="text-xl text-gray-700 mb-8">
            Atendimento médico de qualidade, com profissionais experientes e modernos equipamentos
          </p>

          {/* CTA Form 1 */}
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-md mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Agende seu atendimento</h2>
            <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST" className="space-y-4">
              <input
                type="email"
                name="email"
                placeholder="seu@email.com"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <input
                type="tel"
                name="phone"
                placeholder="(11) 99999-9999"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition"
              >
                Solicitar Agendamento
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Seção 2: Diferenciais */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">
            Por que nos escolher?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <Clock className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Agendamento Rápido</h3>
              <p className="text-gray-700">
                Marque sua consulta em poucos minutos. Oferecemos horários flexíveis para sua comodidade.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <Heart className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Atendimento Humanizado</h3>
              <p className="text-gray-700">
                Profissionais dedicados que tratam você com empatia e atenção personalizada.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <Shield className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Equipamentos Modernos</h3>
              <p className="text-gray-700">
                Tecnologia de ponta para diagnósticos precisos e tratamentos eficazes.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <Users className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Equipe Experiente</h3>
              <p className="text-gray-700">
                Médicos especialistas com anos de experiência no atendimento clínico.
              </p>
            </div>
          </div>

          {/* CTA 2 */}
          <div className="bg-blue-600 text-white rounded-lg p-12 text-center">
            <h3 className="text-3xl font-bold mb-4">Não deixe para depois</h3>
            <p className="text-lg mb-6">Agende sua consulta agora e cuide da sua saúde</p>
            <a
              href="#"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition inline-block"
            >
              Agendar Agora
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="mb-2">{clinic.name}</p>
          <p className="text-gray-400 mb-4">{clinic.specialty}</p>
          <p className="text-gray-500 text-sm">© 2024 Todos os direitos reservados</p>
        </div>
      </footer>
    </div>
  )
}
