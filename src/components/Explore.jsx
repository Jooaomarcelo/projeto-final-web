import readFraternities from '@/utils/getFraternities';

export default async function Explore() {
  const fraternities = await readFraternities();

  console.log(fraternities);

  return (
    // Explore Content
    <div className="flex flex-col p-8 gap-2 items-center">
      {fraternities.map((item, index) => {
        // Card
        return (
          <div
            key={index}
            className="container min-h-52 rounded-3xl flex flex-col items-center p-6 bg-[#9b9b9b] text-black"
          >
            {/* Fraternity Name */}
            <div>
              <h2>{item.name}</h2>
            </div>

            {/* Content */}
            <div className="flex w-full items-center gap-6">
              {/* Image */}
              <div className="w-32 items-start">
                <img
                  src={item.image || null}
                  className="object-cover rounded-full min-w-32"
                />
              </div>
              {/* Description */}
              <div>{item.description}</div>
            </div>

            {/* See More */}
            <div>
              <button className="bg-[#757575] w-48 h-8 rounded-3xl mt-">
                Saiba Mais
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
