import { CreateTodoForm } from '@/client/components/CreateTodoForm'
import { TodoList } from '@/client/components/TodoList'
import * as Tabs from '@radix-ui/react-tabs'
import { useState } from 'react'

/**
 * QUESTION 6:
 * -----------
 * Implement quick filter/tab feature so that we can quickly find todos with
 * different statuses ("pending", "completed", or both). The UI should look like
 * the design on Figma.
 *
 * NOTE:
 *  - For this question, you must use RadixUI Tabs component. Its Documentation
 *  is linked below.
 *
 * Documentation references:
 *  - https://www.radix-ui.com/docs/primitives/components/tabs
 */
const tabList: string[] = ["All", "Pending", "Completed"]
const Index = () => {
  const [activeTab, setActiveTab] = useState("All")
  return (
    <main className="mx-auto w-[480px] pt-12">
      <div className="rounded-12 bg-white p-8 shadow-sm">
        <h1 className="text-center text-4xl font-extrabold text-gray-900">
          Todo App
        </h1>
        <Tabs.Root className="TabsRoot pt-10" defaultValue="All" onValueChange={e => setActiveTab(e)} >
          <Tabs.List className="TabsList" aria-label="Manage your account">
            {
              tabList.map(e =>
                <Tabs.Trigger className={`TabsTrigger border px-6 py-3 mr-2 rounded-full font-bold ${activeTab === e ? `bg-gray-700 text-white` : ""}`} value={e} key={e}>
                  {e}
                </Tabs.Trigger>
              )
            }
          </Tabs.List>
          {
            tabList.map(e =>
              <Tabs.Content className="TabsContent" value={e} key={e}>
                <div className="pt-10">
                  <TodoList status={e} />
                </div>
              </Tabs.Content>
            )
          }
        </Tabs.Root>

        <div className="pt-10">
          <CreateTodoForm />
        </div>
      </div>
    </main>
  )
}

export default Index
