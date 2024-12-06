import { getFraternity } from '@/utils/crudFraternities';
import Link from 'next/link';

export default async function Explore() {
  const fraternities = await getFraternity();
  return (
    // Explore Content
    <div id="explore" className="flex flex-col py-16 gap-2 items-center">
      {fraternities.map((item, index) => {
        if (item.description) {
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
              <div className="flex w-full items-center justify-between gap-2">
                {/* Image */}
                <div className="w-32 h-32 flex items-center justify-center">
                  <img src={item.image || null} className="min-w-32" />
                </div>
                {/* Description */}
                <span>{item.description}</span>
              </div>

              {/* See More */}
              <div className="w-[10%] min-w-[99px]">
                <Link
                  className="bg-[#757575] rounded-3xl p-[10%]"
                  href={`/fraternities/${encodeURIComponent(item.name)}`}
                >
                  Saiba mais
                </Link>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
}
