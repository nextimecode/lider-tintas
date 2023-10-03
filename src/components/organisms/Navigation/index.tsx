'use client'
import { useRef, useEffect } from 'react'
import {
  Box,
  Flex,
  VisuallyHidden,
  Grid,
  Button,
  Text,
  Stack
} from '@chakra-ui/react'
import { useRouter, usePathname } from 'next/navigation'
import { Transition, TransitionStatus } from 'react-transition-group';

import { LogoSVG, MarkSVG } from '@/components/atoms/svgs'
import { MenuIcon, XIcon } from '@/components/atoms/icons'
import { Link } from '@/components/atoms/Link'

const defaultStyle = {
  transition: `all 150ms cubic-bezier(0.4, 0, 1, 1)`
}

const transitionStyles: Record<TransitionStatus, React.CSSProperties | null> = {
  entering: { transform: 'scale(0.95)', opacity: 0, visibility: 'hidden' },
  entered: { transform: 'scale(1)', opacity: 1, visibility: 'visible' },
  exiting: { transform: 'scale(1)', opacity: 1, visibility: 'visible' },
  exited: { transform: 'scale(0.95)', opacity: 0, visibility: 'hidden' },
  unmounted: null,
};

type Page = {
  id: string | number;
  slug: string;
  navigationLabel?: string;
};

type NavigationProps = {
  pages: Page[];
};

export function Navigation({ pages }: NavigationProps) {{
  // const container = useRef<HTMLDivElement>(null);
  // const router = useRouter()
  // const pathname = usePathname()
  // const [mobileNavOpen, setMobileNavOpen] = useState(false)

  // useEffect(() => {
  //   const handleOutsideClick = (event: MouseEvent) => {
  //     if (!container?.current?.contains(event.target as Node)) {
  //       if (!mobileNavOpen) return;
  
  //       setMobileNavOpen(false);
  //     }
  //   };
  
  //   window.addEventListener('click', handleOutsideClick);
  
  //   return () => window.removeEventListener('click', handleOutsideClick);
  // }, [mobileNavOpen, container]);
  

  // useEffect(() => {
  //   const handleEscape = (event: KeyboardEvent) => {
  //     if (!mobileNavOpen) return;
  
  //     if (event.key === 'Escape') {
  //       setMobileNavOpen(false);
  //     }
  //   };
  
  //   document.addEventListener('keyup', handleEscape);
  
  //   return () => document.removeEventListener('keyup', handleEscape);
  // }, [mobileNavOpen]);
  

  return (
    // 
    <h1>navigation</h1>
  )
}
}
