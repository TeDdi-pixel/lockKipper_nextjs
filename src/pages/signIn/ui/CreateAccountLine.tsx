import { Text } from "@/shared/ui/Text";
import { Button } from "@mui/material";
import { useRouter } from "next/navigation";
import React from "react";

const CreateAccountLine = () => {
  const router = useRouter();

  return (
    <div>
      <Text tag="span" className="block w-full border-t"></Text>
      <Text className="flex items-center text-[12px] pt-[5px]">
        New around here?{" "}
        <Button
          variant="text"
          sx={{ fontWeight: "400", fontSize: "12px" }}
          onClick={() => router.push("/create_account")}
        >
          Create account
        </Button>
      </Text>
    </div>
  );
};

export default CreateAccountLine;
