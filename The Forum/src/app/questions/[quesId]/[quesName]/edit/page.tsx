import { db, questionCollection } from "@/models/name";
import { databases } from "@/models/server/config";
import React from "react";
import EditQues from "./EditQues";

const Page = async ({ params }: any) => {
    const {quesId} = await params;
    const question = await databases.getDocument(db, questionCollection, quesId);

    return <EditQues question={question} />;
};

export default Page;
