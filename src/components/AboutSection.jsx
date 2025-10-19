import { Braces,  Handshake, Languages } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Benim <span className="text-primary"> Kimim?</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Dilbilim Öğrencisi ve Teknoloji Tutkunu
            </h3>

            <p className="text-muted-foreground">
              Merhaba! Ben Alper Arslan, Dokuz Eylül Üniversitesi'nde Dilbilimi öğrencisiyim ve teknolojiye büyük bir tutkum var. 
              Ayrıca kendimi kendimi yazılım alanında geliştiriyorum.
            </p>

            <p className="text-muted-foreground">
              Teknoloji dünyasındaki hızlı değişim ve yenilikler beni her zaman heyecanlandırıyor. 
              Bu nedenle, yazılım geliştirme becerilerimi sürekli olarak geliştirmeye ve yeni teknolojileri öğrenmeye odaklanıyorum.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Benimle İletişime Geç
              </a>

              <a
                href="/Alper_Arslan_CV.pdf" target="_blank"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Özgeçmişimi Görüntüle
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Braces className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Programlama</h4>
                  <p className="text-muted-foreground">
                    Python, JavaScript ve HTML/CSS gibi çeşitli programlama dillerinde
                    yetkinlik.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Languages className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Yerelleştirme</h4>
                  <p className="text-muted-foreground">
                    Video oyunların veya farklı projelerinin farklı diller ve kültürler için
                    uyarlanması.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Handshake className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">Takım Çalışması</h4>
                  <p className="text-muted-foreground">
                    Farklı disiplinlerden gelen bireylerle etkili iletişim ve iş birliği
                    becerileri.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
