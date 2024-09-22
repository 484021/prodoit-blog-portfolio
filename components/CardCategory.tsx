import { formatDate } from "@/app/blog/utils";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

export default function CardCategory({
  title,
  summary,
  date,
}: {
  title: string;
  summary: string;
  date: string;
}) {
  return (
    <div>
      <Card className="w-[345px] h-full shadow-lg hover:scale-105 transition">
        <CardHeader>
          <CardTitle className="leading-5">{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="font-light">{summary}</p>
        </CardContent>
        <CardFooter className="mt-auto">
          <p className="text-xs text-gray-500">{formatDate(date)}</p>
        </CardFooter>
      </Card>
    </div>
  );
}
