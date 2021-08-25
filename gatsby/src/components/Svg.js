import React from "react"

export const CarouselIcon = ({ className }) => (
<svg  id="icon" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className={className}>
  <path d="M22,26H10a2,2,0,0,1-2-2V8a2,2,0,0,1,2-2H22a2,2,0,0,1,2,2V24A2,2,0,0,1,22,26ZM10,8V24H22V8Z" fill="currentColor"/>
  <path d="M4,24H0V22H4V10H0V8H4a2,2,0,0,1,2,2V22A2,2,0,0,1,4,24Z" fill="currentColor"/>
  <path d="M32,24H28a2,2,0,0,1-2-2V10a2,2,0,0,1,2-2h4v2H28V22h4Z" fill="currentColor"/>
  {/* <rect id="_Transparent_Rectangle_" data-name="&lt;Transparent Rectangle&gt;" class="cls-1" width="32" height="32"/> */}
</svg>
)


export const GridlIcon = ({ className }) => (
  <svg id="icon" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className={className}>
    <path d="M8,30H4a2,2,0,0,1-2-2V24a2,2,0,0,1,2-2H8a2,2,0,0,1,2,2v4A2,2,0,0,1,8,30ZM4,24v4H8V24Z" fill="currentColor"/>
    <path d="M18,30H14a2,2,0,0,1-2-2V24a2,2,0,0,1,2-2h4a2,2,0,0,1,2,2v4A2,2,0,0,1,18,30Zm-4-6v4h4V24Z" fill="currentColor"/>
    <path d="M28,30H24a2,2,0,0,1-2-2V24a2,2,0,0,1,2-2h4a2,2,0,0,1,2,2v4A2,2,0,0,1,28,30Zm-4-6v4h4V24Z" fill="currentColor"/>
    <path d="M8,20H4a2,2,0,0,1-2-2V14a2,2,0,0,1,2-2H8a2,2,0,0,1,2,2v4A2,2,0,0,1,8,20ZM4,14v4H8V14Z" fill="currentColor"/>
    <path d="M18,20H14a2,2,0,0,1-2-2V14a2,2,0,0,1,2-2h4a2,2,0,0,1,2,2v4A2,2,0,0,1,18,20Zm-4-6v4h4V14Z" fill="currentColor"/>
    <path d="M28,20H24a2,2,0,0,1-2-2V14a2,2,0,0,1,2-2h4a2,2,0,0,1,2,2v4A2,2,0,0,1,28,20Zm-4-6v4h4V14Z" fill="currentColor"/>
    <path d="M8,10H4A2,2,0,0,1,2,8V4A2,2,0,0,1,4,2H8a2,2,0,0,1,2,2V8A2,2,0,0,1,8,10ZM4,4V8H8V4Z" fill="currentColor"/>
    <path d="M18,10H14a2,2,0,0,1-2-2V4a2,2,0,0,1,2-2h4a2,2,0,0,1,2,2V8A2,2,0,0,1,18,10ZM14,4V8h4V4Z" fill="currentColor"/>
    <path d="M28,10H24a2,2,0,0,1-2-2V4a2,2,0,0,1,2-2h4a2,2,0,0,1,2,2V8A2,2,0,0,1,28,10ZM24,4V8h4V4Z" fill="currentColor"/>
  </svg>
  )
  
  export const ChevronLeft = ({ className }) => (
    <svg id="icon" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className={className}>
      <polygon points="10,16 20,6 21.4,7.4 12.8,16 21.4,24.6 20,26 " fill="currentColor"/>
      <rect id="_x3C_Transparent_Rectangle_x3E_" class="st0" width="32" height="32" />
    </svg>
  )
    
  export const ChevronRight = ({ className }) => (
    <svg id="icon" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className={className}>
      <polygon points="22,16 12,26 10.6,24.6 19.2,16 10.6,7.4 12,6 " fill="currentColor"/>
      <rect id="_x3C_Transparent_Rectangle_x3E_" class="st0" width="32" height="32"/>
    </svg>
  )