import { Router } from 'express'
import { body } from 'express-validator'
import { createProduct } from './handlers/product'
import { handleInputErrors } from './modules/middleware'

const router = Router()

// Product
router.get('/product', (req, res) => {
  res.json({ message: req.shhhSecret })
})
router.get('/product/:id', () => {})
router.put(
  '/product/:id',
  body('name').isString(),
  handleInputErrors,
  (req, res) => {}
)
router.post(
  '/product',
  body('name').isString(),
  handleInputErrors,
  createProduct,
  (req, res) => {}
)
router.delete('/product/:id', () => {})

// Update
router.get('/update', () => {})
router.get('/update/:id', () => {})
router.put(
  '/update/:id',
  body('title').optional(),
  body('body').optional(),
  body('status').isIn(['IN_PROGRESS', 'SHIPPED', 'DEPRECATED']),
  body('version').optional(),
  () => {}
)
router.post('/update', () => {})
router.delete('/update/:id', () => {})

// Update points
router.get('/updatepoint', () => {})
router.get('/updatepoint/:id', () => {})
router.put(
  '/updatepoint/:id',
  body('name').optional().isString(),
  body('description').optional().isString(),
  () => {}
)
router.post(
  '/updatepoint',
  body('name').optional().isString(),
  body('description').optional().isString(),
  body('updateId').exists,
  (req, res) => {}
)
router.delete('/updatepoint/:id', () => {})

export default router
