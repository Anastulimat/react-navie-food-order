import {Redirect, Slot} from "expo-router";
import useAuthStore from "@/store/auth.store";

// ----------------------------------------------------------------------

const TabsLayout = () => {
    const { isAuthenticated } = useAuthStore();

    if(!isAuthenticated) return <Redirect href="/sign-in" />


    return (
        <Slot />
    );
};

export default TabsLayout;
