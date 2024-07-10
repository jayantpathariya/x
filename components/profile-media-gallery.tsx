import Image from "next/image";

const media = [
  {
    id: 1,
    src: "https://cdn.pixabay.com/photo/2024/04/19/04/39/kingfisher-8705377_1280.jpg",
  },
  {
    id: 2,
    src: "https://cdn.pixabay.com/photo/2024/02/16/20/28/lighthouse-8578318_1280.jpg",
  },
  {
    id: 3,
    src: "https://cdn.pixabay.com/photo/2024/02/07/18/42/music-8559592_1280.jpg",
  },
  {
    id: 4,
    src: "https://cdn.pixabay.com/photo/2023/05/27/22/56/kitten-8022452_1280.jpg",
  },
  {
    id: 5,
    src: "https://cdn.pixabay.com/photo/2024/06/26/14/02/moon-8855057_1280.jpg",
  },
  {
    id: 6,
    src: "https://cdn.pixabay.com/photo/2024/06/25/16/57/woman-8853114_1280.jpg",
  },
  {
    id: 7,
    src: "https://cdn.pixabay.com/photo/2024/01/20/06/50/woman-8520431_1280.png",
  },
  {
    id: 8,
    src: "https://cdn.pixabay.com/photo/2024/02/17/15/14/crows-8579540_1280.jpg",
  },
];

export const ProfileMediaGallery = () => {
  return (
    <div className="grid grid-cols-3 gap-1 mb-16 p-2">
      {media.map((item) => (
        <Image
          key={item.id}
          src={item.src}
          alt="media"
          height={200}
          width={200}
          className="aspect-square object-cover"
        />
      ))}
    </div>
  );
};
