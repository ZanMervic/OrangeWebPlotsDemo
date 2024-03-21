import Link from "next/link";

export default function Navigation() {
  return (
    <div className="flex justify-around items-center bg-slate-600 w-full z-10">
      <Link href="/apexcharts">Apexcharts</Link>
      <Link href="/victory">Victory</Link>
      <Link href="/echarts">Echarts</Link>
      <Link href="/nivo">Nivo</Link>
      <Link href="/highcharts">Highcharts</Link>
      <Link href="/recharts">Recharts</Link>
      <Link href="/chartjs">ChartJS</Link>
    </div>
  );
}