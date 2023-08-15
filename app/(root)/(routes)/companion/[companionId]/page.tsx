import { FC } from "react";

import { db } from "@/lib/prismadb";
import CompanionForm from "./components/companion-form";

interface CompanionIdPageProps {
  params: {
    companionId: string;
  };
}

const CompanionIdPage: FC<CompanionIdPageProps> = async ({ params }) => {
  const companion = await db.companion.findUnique({
    where: {
      id: params.companionId,
    },
  });

  const categories = await db.category.findMany();

  return <CompanionForm initialData={companion} categories={categories} />;
};

export default CompanionIdPage;
