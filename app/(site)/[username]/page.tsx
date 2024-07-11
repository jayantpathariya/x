import { Profile } from "@/components/profile/profile";
import { ProfileHeader } from "@/components/profile/profile-header";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "(1) John Doe (@johndoe)",
};

const ProfilePage = () => {
  return (
    <div>
      <ProfileHeader />
      <Profile />
    </div>
  );
};

export default ProfilePage;
