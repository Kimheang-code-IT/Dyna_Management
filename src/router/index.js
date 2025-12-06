import { createRouter, createWebHistory } from 'vue-router'
import DashboardView from '../views/DashboardView.vue'
import CategoryView from '../views/CategoryView.vue'
import ProductView from '../views/ProductView.vue'
import PosView from '../views/PosView.vue'
import ReportView from '../views/ReportView.vue'
import UserView from '../views/UserView.vue'
import StudentsView from '../views/StudentsView.vue'
import StudentRegisterView from '../views/StudentRegisterView.vue'
import ClassManagementView from '../views/ClassManagementView.vue'
import StudentDeadlineView from '../views/StudentDeadlineView.vue'
import StudentPaymentView from '../views/StudentPaymentView.vue'
import StudentBookView from '../views/StudentBookView.vue'
import StudentGraduatedView from '../views/StudentGraduatedView.vue'
import EmployeeView from '../views/EmployeeView.vue'
import EmployeeRegisterView from '../views/EmployeeRegisterView.vue'
import EmployeeAttendanceView from '../views/EmployeeAttendanceView.vue'
import EmployeeSalaryView from '../views/EmployeeSalaryView.vue'
import EmployeeScheduleView from '../views/EmployeeScheduleView.vue'
import FinancialView from '../views/FinancialView.vue'
import InvestmentView from '../views/InvestmentView.vue'
import ExpenseView from '../views/ExpenseView.vue'
import IncomeView from '../views/IncomeView.vue'

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/LoginView.vue')
  },
  {
    path: '/forgot-password',
    name: 'ForgotPassword',
    component: () => import('../views/ForgotPasswordView.vue')
  },
  {
    path: '/',
    name: 'Dashboard',
    component: DashboardView
  },
  {
    path: '/category',
    name: 'Category',
    component: CategoryView
  },
  {
    path: '/product',
    name: 'Product',
    component: ProductView
  },
  {
    path: '/pos',
    name: 'Pos',
    component: PosView
  },
  {
    path: '/report',
    name: 'Report',
    component: ReportView
  },
  {
    path: '/user',
    name: 'User',
    component: UserView
  },
  {
    path: '/history',
    name: 'History',
    component: () => import('../views/HistoryView.vue')
  },
  {
    path: '/invoice/:cartData?',
    name: 'Invoice',
    component: () => import('../views/InvoiceView.vue')
  },
  // STUDENTS section routes
  {
    path: '/students',
    name: 'Students',
    component: StudentsView
  },
  {
    path: '/student-register',
    name: 'StudentRegister',
    component: StudentRegisterView
  },
  {
    path: '/class-management',
    name: 'ClassManagement',
    component: ClassManagementView
  },
  {
    path: '/student-deadline',
    name: 'StudentDeadline',
    component: StudentDeadlineView
  },
  {
    path: '/student-payment',
    name: 'StudentPayment',
    component: StudentPaymentView
  },
  {
    path: '/student-book',
    name: 'StudentBook',
    component: StudentBookView
  },
  {
    path: '/student-graduated',
    name: 'StudentGraduated',
    component: StudentGraduatedView
  },
  {
    path: '/certificate/:id',
    name: 'Certificate',
    component: () => import('../views/CertificateView.vue')
  },
  // EMPLOYEE section routes
  {
    path: '/employee',
    name: 'Employee',
    component: EmployeeView
  },
  {
    path: '/employee-register',
    name: 'EmployeeRegister',
    component: EmployeeRegisterView
  },
  {
    path: '/employee-attendance',
    name: 'EmployeeAttendance',
    component: EmployeeAttendanceView
  },
  {
    path: '/employee-salary',
    name: 'EmployeeSalary',
    component: EmployeeSalaryView
  },
  {
    path: '/employee-schedule',
    name: 'EmployeeSchedule',
    component: EmployeeScheduleView
  },
  // FINANCIAL section routes
  {
    path: '/financial',
    name: 'Financial',
    component: FinancialView
  },
  {
    path: '/investment',
    name: 'Investment',
    component: InvestmentView
  },
  {
    path: '/expense',
    name: 'Expense',
    component: ExpenseView
  },
  {
    path: '/income',
    name: 'Income',
    component: IncomeView
  },
  // System Maintenance and Error pages
  {
    path: '/system-maintenance',
    name: 'SystemMaintenance',
    component: () => import('../views/SystemMaintenanceView.vue')
  },
  {
    path: '/system-error',
    name: 'SystemError',
    component: () => import('../views/SystemErrorView.vue')
  },
  {
    path: '/system-error/:type',
    name: 'SystemErrorWithType',
    component: () => import('../views/SystemErrorView.vue')
  },
  {
    path: '/system-error/:type/:code',
    name: 'SystemErrorWithTypeAndCode',
    component: () => import('../views/SystemErrorView.vue')
  },
  // Catch all 404 route - must be last
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('../views/NotFoundView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

