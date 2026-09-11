'use client'
import { useState } from 'react'
import { TabNav } from './TabNav'
import { GiaiNganSection } from './GiaiNganSection'
import { GpmbSection } from './GpmbSection'
import { ThuNsSection } from './ThuNsSection'

export function ChiTieuContent() {
  const [activeTab, setActiveTab] = useState('giai-ngan')

  return (
    <div className="space-y-4">
      <TabNav active={activeTab} onChange={setActiveTab} />
      {activeTab === 'giai-ngan' && <GiaiNganSection />}
      {activeTab === 'gpmb'      && <GpmbSection />}
      {activeTab === 'thu-ns'    && <ThuNsSection />}
    </div>
  )
}
