import UserProvider from "@context/users/usersContext";
import PersonalProjectContainer from "./Container";
import type { PersonalProjectWrapperProps } from "./types";

function PersonalProjectWrapper({ initialData }: PersonalProjectWrapperProps) {
  return (
    <UserProvider initialData={initialData}>
      <PersonalProjectContainer />
    </UserProvider>
  );
}

export default PersonalProjectWrapper;
