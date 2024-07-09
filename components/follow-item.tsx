import Image from "next/image";

export const FollowItem = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-x-2 mt-4">
        <Image
          src="/profile-picture.png"
          alt="Profile picture"
          width={40}
          height={40}
          className="rounded-full"
        />
        <div>
          <p className="text-sm text-neutral-200 font-semibold">
            Dustin Willis
          </p>
          <span className="text-sm text-neutral-500">@carlos</span>
        </div>
      </div>
      <button className="bg-neutral-100 text-neutral-900 font-bold py-1 px-2 rounded-full text-sm">
        Follow
      </button>
    </div>
  );
};
