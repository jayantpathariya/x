import Image from "next/image";

export const PostThread = () => {
  return (
    <div>
      <Image
        src="/profile-picture.png"
        width={40}
        height={40}
        alt="Profile picture"
        className="rounded-full size-10"
      />
    </div>
  );
};
