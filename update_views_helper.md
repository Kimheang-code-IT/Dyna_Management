# View Update Pattern

For each view file, apply these changes:

1. **Add imports:**
```javascript
import { useToast } from '../composables/useToast'
import { useLoading } from '../composables/useLoading'
import { useErrorHandler } from '../composables/useErrorHandler'
```

2. **Initialize composables:**
```javascript
const { success, error } = useToast()
const { withLoading } = useLoading()
const { handleError } = useErrorHandler()
```

3. **Replace toast calls:**
- `showSuccessToast(title, text)` → `success(\`${title}: ${text}\`)`
- `showErrorToast(title, text)` → `error(\`${title}: ${text}\`)`

4. **Wrap async operations:**
```javascript
await withLoading(async () => {
  // existing code
}, 'Loading message...')
```

5. **Replace error handling:**
```javascript
catch (err) {
  handleError(err, { userMessage: 'User-friendly message' })
}
```

6. **Remove old toast UI elements and state variables**

