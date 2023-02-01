import { Box } from "@chakra-ui/react";
import { LoadingProvider, AuthProvider, WidthProvider } from "../context";
import SimpleSidebar from "../components/Sidebar";
import { useState } from "react";
import { useRouter } from "next/router";

const DefaultLayout = ({ children }) => {
  const [sectionActive, setSectionActive] = useState(0);
  const router = useRouter();
  return (
    <AuthProvider>
      <LoadingProvider>
        <WidthProvider>
          <main style={{ height: "100vh" }}>
            {router.asPath.includes("dashboard") ? (
              <Box
                display="flex"
                alignItems="center"
                height="full"
                gap="1.5rem"
              >
                <SimpleSidebar>
                  {children}
                </SimpleSidebar>
              </Box>
            ) : (
              children
            )}
          </main>
        </WidthProvider>
      </LoadingProvider>
    </AuthProvider>
  );
};

export default DefaultLayout;
