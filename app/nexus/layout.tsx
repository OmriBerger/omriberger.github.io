import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Nexus",
    description: "Made to not appear suspicious",
};

export default function NexusLayout({
                                        children,
                                    }: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
