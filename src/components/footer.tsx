import { Button } from '@/components/button';

export const Footer = () => {
  return (
    <footer className="text-muted-foreground my-2 text-sm">
      © {new Date().getFullYear()}{' '}
      <Button variant="link" className="text-muted-foreground p-0 font-medium">
        <a href="https://github.com/abdul-rehman67">Abdul Rehman Shaikh</a>
      </Button>
      . All rights reserved.
    </footer>
  );
};
