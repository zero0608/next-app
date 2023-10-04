'use client'
import SimpleLoginForm from './loginTemplate'
 
export default function Page() {
  return (
    <div className="grid min-h-[140px] w-full place-items-center overflow-x-scroll rounded-lg p-6 lg:overflow-visible">
        <SimpleLoginForm>
        </SimpleLoginForm>
    </div>
  );
}