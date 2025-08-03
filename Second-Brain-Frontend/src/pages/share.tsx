import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { Card } from "../components/card"; 

interface ContentItem {
  _id: string;
  title: string;
  link: string;
  type: "tweet" | "youtube";
  tags?: string[];
}

export function Shared() {
  const { sharedhash } = useParams(); 
  const [username, setUsername] = useState("");
  const [contents, setContents] = useState<ContentItem[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!sharedhash) return;

    async function fetchSharedData() {
      try {
        const res = await axios.get(
          `http://localhost:3000/api/v1/brain/${sharedhash}`
        );

        setUsername(res.data.username);
        setContents(res.data.content);
      } catch (err: any) {
        setError("Shared link is invalid or expired.");
        console.error(err);
      }
    }

    fetchSharedData();
  }, [sharedhash]);

  if (error) {
    return <div className="text-center text-red-500 mt-10">{error}</div>;
  }

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4 text-center">
        Shared by {username}
      </h2>
      <div className="flex flex-wrap justify-center gap-4">
        {contents.map((item) => (
          <Card
            key={item._id}
            _id={item._id}
            title={item.title}
            link={item.link}
            type={item.type}
          />
        ))}
      </div>
    </div>
  );
}
