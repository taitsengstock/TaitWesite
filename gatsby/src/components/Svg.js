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

  export const Collapse = ({ className }) => (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M28 4H4C3.46957 4 2.96086 4.21071 2.58579 4.58579C2.21071 4.96086 2 5.46957 2 6V26C2 26.5304 2.21071 27.0391 2.58579 27.4142C2.96086 27.7893 3.46957 28 4 28H28C28.5304 28 29.0391 27.7893 29.4142 27.4142C29.7893 27.0391 30 26.5304 30 26V6C30 5.46957 29.7893 4.96086 29.4142 4.58579C29.0391 4.21071 28.5304 4 28 4ZM4 6H13V26H4V6ZM28 26H15V6H28V26Z" fill="currentColor"/>
      <path d="M6 16.0001L9.4 12.6002L10.8 14.0001L8.8 16.0001L10.8 18L9.4 19.4L6 16.0001Z" fill="currentColor"/>
    </svg>
  )

  export const Expand = ({ className }) => (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M28 4H4C3.46957 4 2.96086 4.21071 2.58579 4.58579C2.21071 4.96086 2 5.46957 2 6V26C2 26.5304 2.21071 27.0391 2.58579 27.4142C2.96086 27.7893 3.46957 28 4 28H28C28.5304 28 29.0391 27.7893 29.4142 27.4142C29.7893 27.0391 30 26.5304 30 26V6C30 5.46957 29.7893 4.96086 29.4142 4.58579C29.0391 4.21071 28.5304 4 28 4ZM4 6H13V26H4V6ZM28 26H15V6H28V26Z" fill="currentColor"/>
      <path d="M11 16L7.6 19.4L6.2 18L8.2 16L6.2 14.0001L7.6 12.6001L11 16Z" fill="currentColor"/>
    </svg>
  )




