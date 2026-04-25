import {
  Avatar,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
  AvatarImage,
} from "@/components/ui/avatar";

export function AvatarBlock() {
  return (
    <div className="flex flex-wrap items-center gap-3 md:gap-4 mx-auto w-full max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl 2xl:max-w-3xl justify-center z-10">
      <AvatarGroup className="items-center -space-x-2.5">
        <Avatar className="ring-1 ring-white shadow-[0_1px_2px_rgba(0,0,0,0.12)]">
          <AvatarImage
            src="https://randomuser.me/api/portraits/men/32.jpg"
            alt="Healthy family member"
          />
          <AvatarFallback>HF</AvatarFallback>
        </Avatar>
        <Avatar className="ring-1 ring-white shadow-[0_1px_2px_rgba(0,0,0,0.12)]">
          <AvatarImage
            src="https://randomuser.me/api/portraits/men/45.jpg"
            alt="Healthy family member"
          />
          <AvatarFallback>HF</AvatarFallback>
        </Avatar>
        <Avatar className="ring-1 ring-white shadow-[0_1px_2px_rgba(0,0,0,0.12)]">
          <AvatarImage
            src="https://randomuser.me/api/portraits/women/65.jpg"
            alt="Healthy family member"
          />
          <AvatarFallback>HF</AvatarFallback>
        </Avatar>
        <Avatar className="ring-1 ring-white shadow-[0_1px_2px_rgba(0,0,0,0.12)]">
          <AvatarImage
            src="https://randomuser.me/api/portraits/women/44.jpg"
            alt="Healthy family member"
          />
          <AvatarFallback>HF</AvatarFallback>
        </Avatar>
        <AvatarGroupCount className="bg-[#E9ECED] text-[11px] font-medium text-[#747A7D]">
          3K+
        </AvatarGroupCount>
      </AvatarGroup>
      <p className="text-xs font-light tracking-[0.01em] text-[#63686B]">
        Trusted by thousands of healthy families
      </p>
    </div>
  );
}
