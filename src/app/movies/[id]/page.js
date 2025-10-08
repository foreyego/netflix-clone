"use client";
import { useParams } from "next/navigation";
export default function MovieDetailPage() {
    const params = useParams();
    return(
        <div> this is detail page {params.id}</div>
    );
}
