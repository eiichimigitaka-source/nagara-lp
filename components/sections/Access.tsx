export default function Access() {
  return (
    <section id="access" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-teal-600 font-bold text-sm uppercase tracking-wider mb-3">
            ACCESS
          </p>
          <h2 className="text-3xl md:text-4xl font-black text-stone-800 mb-4">
            アクセス
          </h2>
          <p className="text-stone-500 flex items-center justify-center gap-2">
            <span className="text-orange-400">📍</span>
            岐阜市長良3丁目282番地 グランリーオ長良１F
          </p>
        </div>

        <div className="bg-stone-50 rounded-3xl border border-stone-200 overflow-hidden shadow-sm">
          <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1625.0678390871387!2d136.7839337239103!3d35.45143532129333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6003abd0f3e12bfb%3A0xf0ef8cd4b6a232!2z44Gq44GM44KJU1RFQU0gTEFC!5e0!3m2!1sja!2sjp!4v1776433539756!5m2!1sja!2sjp"
              className="absolute inset-0 w-full h-full"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="ながらSTEAM LAB アクセスマップ"
            />
          </div>

          <div className="px-6 py-5 flex flex-col sm:flex-row sm:items-center gap-4">
            <div className="flex items-start gap-3 flex-1">
              <span className="flex-shrink-0 w-8 h-8 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center text-sm mt-0.5">
                📍
              </span>
              <div>
                <p className="font-bold text-stone-700 text-sm">住所</p>
                <p className="text-stone-600 text-sm mt-0.5">
                  〒502-0816　岐阜市長良3丁目282番地 グランリーオ長良１F
                </p>
              </div>
            </div>
            <a
              href="https://maps.google.com/?q=岐阜市長良3丁目282番地+グランリーオ長良"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 inline-flex items-center gap-1.5 bg-teal-600 hover:bg-teal-700 text-white text-sm font-bold px-5 py-2.5 rounded-xl transition-colors"
            >
              Google マップで開く
              <span className="text-xs">↗</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
