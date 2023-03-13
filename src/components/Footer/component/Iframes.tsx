import React from 'react'

const Iframes = () => {
  const iframes =
    '  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.105500722788!2d106.6506424145893!3d10.803231192303354!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752e639bf01243%3A0x700ebdccb5a04987!2sGreenwich%20Vi%E1%BB%87t%20Nam!5e0!3m2!1sen!2s!4v1678094456427!5m2!1sen!2s" width="230" height="230" style="border:0; margin-inline: auto" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
  return <div dangerouslySetInnerHTML={{ __html: iframes ? iframes : '' }}></div>
}

export default Iframes
