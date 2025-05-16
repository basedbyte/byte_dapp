"use client"
import { useState, useRef } from 'react'

export type TaskFormData = {
  title: string
  category: string
  tags: string
  description: string
  date: string
  files: File[]
}

export const useTaskForm = (initialCategories: string[] = []) => {
  const [budgetType, setBudgetType] = useState('Fixed')
  const [showBudgetOptions, setShowBudgetOptions] = useState(false)
  const [files, setFiles] = useState<File[]>([])
  const categories = initialCategories.length > 0 
    ? initialCategories 
    : ['UI/UX', 'Frontend', 'Backend', 'Smart Contract', 'Marketing', 'Other']

  const [formData, setFormData] = useState<TaskFormData>({
    title: '',
    category: categories[0],
    tags: '',
    description: '',
    date: '',
    files: []
  })
  
  const fileInputRef = useRef<HTMLInputElement>(null)

  const toggleBudgetOptions = () => {
    setShowBudgetOptions(!showBudgetOptions)
  }

  const selectBudget = (type: string) => {
    setBudgetType(type)
    setShowBudgetOptions(false)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const newFiles = Array.from(e.target.files)
      setFiles(prev => [...prev, ...newFiles])
      setFormData(prev => ({
        ...prev,
        files: [...prev.files, ...newFiles]
      }))
    }
  }

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    e.stopPropagation()
  }

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    e.stopPropagation()
    
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const newFiles = Array.from(e.dataTransfer.files)
      setFiles(prev => [...prev, ...newFiles])
      setFormData(prev => ({
        ...prev,
        files: [...prev.files, ...newFiles]
      }))
    }
  }

  const openFileDialog = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click()
    }
  }

  const removeFile = (index: number) => {
    setFiles(prev => prev.filter((_, i) => i !== index))
    setFormData(prev => ({
      ...prev,
      files: prev.files.filter((_, i) => i !== index)
    }))
  }

  const handleSubmit = (e: React.FormEvent, preview = false) => {
    e.preventDefault()
    
    const finalData = {
      ...formData,
      budgetType
    }
    
    if (preview) {
      console.log('Preview form data:', finalData)
      // Here you would implement preview functionality
      return finalData
    } else {
      console.log('Submitting form data:', finalData)
      // Here you would submit the form data to your backend
      
      const submitData = new FormData()
      submitData.append('title', formData.title)
      submitData.append('category', formData.category)
      submitData.append('tags', formData.tags)
      submitData.append('description', formData.description)
      submitData.append('budgetType', budgetType)
      submitData.append('date', formData.date)
      
      formData.files.forEach((file, index) => {
        submitData.append(`file-${index}`, file)
      })
      
      return submitData
    }
  }

  return {
    formData,
    fileInputRef,
    budgetType,
    showBudgetOptions,
    files,
    categories,
    toggleBudgetOptions,
    selectBudget,
    handleChange,
    handleFileChange,
    handleDragOver,
    handleDrop,
    openFileDialog,
    removeFile,
    handleSubmit
  }
}