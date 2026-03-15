import Image from "next/image"

export default function Page() {
  return (
    <main className="bg-[rgb(255,255,255)] min-h-screen">

      <div className="max-w-[1200px] mx-auto flex justify-between items-center py-6 px-8">
        <div className="font-semibold">Logo</div>

        <div className="flex gap-10 text-white-700">
          <p>About</p>
          <p>Work</p>
          <p>Contact</p>
        </div>
      </div>

      <section className="max-w-[1200px] mx-auto px-8 py-16 grid md:grid-cols-2 gap-10 items-center">

        <div>
          <p className="text-white-600 mb-4">Branding | Image making</p>

          <h1 className="text-6xl font-bold leading-tight mb-6">
            My awesome portfolio
          </h1>

          <p className="text-white-600">
            And I made it myself! Yes, in Figma with Anima
          </p>
        </div>

        <div className="relative w-full h-[320px]">
          <Image
            src="/images/Image.png"
            alt=""
            fill
            className="object-contain"
          />
        </div>

      </section>

      <section className="max-w-[1200px] mx-auto px-8 py-10 border-y border-white-300">
        <div className="flex flex-wrap justify-between items-center gap-10 opacity-80">

          <Image src="/images/Behance.png" alt="" width={90} height={40}/>
          <Image src="/images/Google.png" alt="" width={90} height={40}/>
          <Image src="/images/Apple.png" alt="" width={40} height={40}/>
          <Image src="/images/Dribbble.png" alt="" width={90} height={40}/>
          <Image src="/images/Awwwards.png" alt="" width={110} height={40}/>

        </div>
      </section>


       <section className="max-w-[1200px] mx-auto px-10 py-8">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16">

             <Work img="/images/anh11.jpg" title="Product design" artist="This is a templete Figma file, turned into code using Anima. Learn more at AnimaApp.com"/>
            <Work img="/images/anh22.jpg" title="Art direction" artist="This is a templete Figma file, turned into code using Anima. Learn more at AnimaApp.com"/>
             <Work img="/images/anh33.jpg" title="Visual design" artist="This is a templete Figma file, turned into code using Anima. Learn more at AnimaApp.com"/>
     
        </div>

      </section>

      <section className="max-w-[1200px] mx-auto px-8 py-20">

        <h2 className="text-center text-2xl font-semibold mb-16">
          My latest work
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16">

          <Work img="/images/image_1.png" title="Free Bird" artist="Lynyrd Skynyrd"/>
          <Work img="/images/image_2.png" title="Purple Haze" artist="Jimi Hendrix"/>
          <Work img="/images/image_3.png" title="You Really Got Me" artist="The Kinks"/>
          <Work img="/images/image_4.png" title="American Girl" artist="Tom Petty"/>
          <Work img="/images/image_5.png" title="Whole Lotta Love" artist="Led Zeppelin"/>
          <Work img="/images/image_6.png" title="Under Pressure" artist="Queen"/>

        </div>

      </section>

      <section className="max-w-[1200px] mx-auto px-8 py-20">

        <h2 className="text-center text-2xl font-semibold mb-14">
          Clients
        </h2>

        <div className="grid md:grid-cols-3 gap-10">

          {[1,2,3].map(i => (
            <div key={i} className="border border-yellow-400 p-6 bg-[#f5f5f5]">

              <p className="text-sm text-gray-600 mb-6">
                This is a template Figma file turned into code using Anima.
              </p>

              <div className="flex items-center gap-3">

                <div className="relative w-10 h-10 rounded-full overflow-hidden">
                  <Image
                    src="/images/author_image.png"
                    alt=""
                    fill
                    className="object-cover"
                  />
                </div>

                <div>
                  <p className="text-sm font-semibold">Gemma Nolen</p>
                  <p className="text-xs text-gray-500">Google</p>
                </div>

              </div>

            </div>
          ))}

        </div>

      </section>

      <section className="max-w-[1200px] mx-auto px-8 py-20 border-t border-gray-300">

        <div className="grid md:grid-cols-2 gap-20">

          <div>
            <h2 className="text-2xl font-semibold mb-6">
              Let’s work together
            </h2>

            <p className="text-gray-600 mb-8">
              This is a template Figma file turned into code using Anima.
            </p>

            <div className="flex gap-5 text-xl opacity-70">
              <span>🌐</span>
              <span>📘</span>
              <span>📸</span>
              <span>🎨</span>
            </div>
          </div>

          <form className="flex flex-col gap-4">

            <input placeholder="Name" className="bg-gray-200 p-4 outline-none"/>
            <input placeholder="Email" className="bg-gray-200 p-4 outline-none"/>

            <textarea
              placeholder="Type your message here"
              className="bg-gray-200 p-4 h-40 outline-none"
            />

            <button className="bg-black text-white py-4 mt-4 w-40">
              Submit
            </button>

          </form>

        </div>

      </section>

    </main>
  )
}

function Service({img,title}:{img:string,title:string}) {
  return (
    <div>
      <div className="relative w-[130px] h-[130px] mx-auto mb-6">
        <Image src={img} alt="" fill className="object-contain"/>
      </div>

      <h3 className="font-semibold mb-3">{title}</h3>

      <p className="text-gray-500 text-sm">
        This is a template Figma file turned into code using Anima.
      </p>
    </div>
  )
}

function Work({
  img,
  title,
  artist,
}: {
  img: string
  title: string
  artist: string
}) {
  return (
    <div className="group cursor-pointer">

      <div className="relative w-full h-[240px] overflow-hidden">
        <Image
          src={img}
          alt=""
          fill
          className="object-cover transition duration-500 group-hover:scale-110"
        />
      </div>

      <div className="mt-4">
        <p className="font-semibold">{title}</p>
        <p className="text-gray-500 text-sm">{artist}</p>
      </div>

    </div>
  )
}