import { SubscriptionForm } from "../SubscriptionForm";
import { SocialLinks } from "../SocialLinks";
import { Copyright } from "../Copyright";
import { MenuItems } from "../MenuItems";




export function Footer() {
  return (
    <footer className="bg-footer-bg">
      <div className="container">
        <div className="flex flex-col lg:flex-row justify-between py-10 px-2 gap-8">
          <div className="flex flex-col gap-8 min-w-86">
           <SubscriptionForm />

           <SocialLinks />   
          </div>

          <MenuItems />
        </div>

        <Copyright />
      </div>
    </footer>
  );
}
