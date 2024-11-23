import HeroSection from '../organisms/HeroSection';
import ChecklistSection from '../organisms/ChecklistSection';
import ScrollingSection from '../organisms/ScrollingSection';

export default function PageTemplate() {
  return (
    <div>
      <HeroSection />
      <ChecklistSection />
      <ScrollingSection />
    </div>
  );
}
