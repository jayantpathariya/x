import Image from "next/image";

export const ChatContentHeader = () => {
  return (
    <div className="flex items-center justify-center text-center border-b border-neutral-800 pb-12">
      <div className="flex flex-col gap-y-2">
        <div className="flex flex-col items-center justify-center">
          <Image
            src="/profile-picture.png"
            alt="Profile Picture"
            width={50}
            height={50}
            className="size-14 rounded-full"
          />
          <p className="font-semibold">Derrick Robinson</p>
          <span className="text-neutral-500 text-sm">@derrickrobinson</span>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa aliquam
          dicta aperiam placeat asperiores nobis adipisci iste incidunt.
        </p>
        <div className="text-sm text-neutral-500">
          <span>Joined November 2021 </span>
          <span>• 285.9K Followers</span>
        </div>
        <div className="flex items-center gap-x-2 justify-center">
          <div className="flex items-center">
            <Image
              src="/profile-picture.png"
              alt="Profile Picture"
              width={40}
              height={40}
              className="size-6 rounded-full -mr-3"
            />
            <Image
              src="/profile-picture.png"
              alt="Profile Picture"
              width={40}
              height={40}
              className="size-6 rounded-full"
            />
          </div>
          <p className="text-sm text-neutral-500">
            Followed by Andre and Joshua
          </p>
        </div>
      </div>
    </div>
  );
};
