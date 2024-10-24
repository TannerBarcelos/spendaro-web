import { Card, CardContent } from "@/components/ui/card";

export function QuickViewWidget() {
  return (
    <Card className="p-3">
      <CardContent className="p-0 h-full">
        <div className="grid grid-cols-2 grid-rows-2 gap-2 h-full">
          <div className="bg-slate-100 rounded-xl flex items-center justify-center">
            q
          </div>
          <div className="bg-slate-100 rounded-xl flex items-center justify-center">
            d
          </div>
          <div className="bg-slate-100 rounded-xl flex items-center justify-center">
            g
          </div>
          <div className="bg-slate-100 rounded-xl flex items-center justify-center">
            a
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
